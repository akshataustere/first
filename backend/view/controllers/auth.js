const con = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

class AuthController {
  async Register(req, res) {
    try {
      const { Id, name, email, password } = req.body;

      // Check if all fields are provided
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the user already exists
      const checkUserQuery = "SELECT * FROM users WHERE email = ?";
      con.query(checkUserQuery, [email], async (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return res
            .status(500)
            .json({ message: "Error checking existing users" });
        }

        if (result.length > 0) {
          return res
            .status(400)
            .json({ message: "Email is already registered" });
        }

        //hash password
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);

        const q =
          "INSERT INTO users (Id, name, email, password) VALUES (?, ?, ?, ?)";
        con.query(q, [Id, name, email, hashPassword], async (err, result) => {
          if (err) {
            console.error("Database Error:", err);
            return res
              .status(500)
              .json({ message: "Error occurred while adding user" });
          }

          res.status(201).json({
            message: "User Registered Successfully",
            name: name,
            email: email,
          });
        });
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  }

  async Login(req, res) {
    try {
      const { name, email, password } = req.body;

      // Validate fields
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if user exists
      const checkUserQuery = "SELECT * FROM users WHERE name = ? AND email = ?";
      con.query(checkUserQuery, [name, email], async (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return res.status(500).json({ message: "Database error" });
        }

        if (result.length === 0) {
          return res.status(404).json({ message: "Invalid credentials" });
        }

        const user = result[0];

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign(
          { id: user.id, name: user.name, email: user.email },
          process.env.JWT_Token,
          { expiresIn: "1h" }
        );

        console.log("User logged in:", token);
        return res.status(200).json({
          message: "Login Successful",
          token,
        });
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  }

  async ForgotPassword(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const checkUserQuery = "SELECT * FROM users WHERE email = ?";
      
      con.query(checkUserQuery, [email], async (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        if (result.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        const user = result[0];
        const resetToken = crypto.randomBytes(32).toString("hex");
        const hashedToken = await bcrypt.hash(resetToken, 10);
        const tokenExpiration = new Date(Date.now() + 3600000);
        // 1 hour from now

        // Save the token and its expiration date to the user's record
        const updateUserQuery =
          "UPDATE users SET reset_token = ?, token_expiration = ? WHERE email = ?";
        con.query(
          updateUserQuery,
          [hashedToken, tokenExpiration, email],
          async (err, result) => {
            if (err) {
              console.error("Database Error:", err);
              return res.status(500).json({ message: "Internal server error" });
            }

            // Send email to the user with the reset link
            const transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587, // Use 465 for SSL/TLS
              secure: false, // Set to true if using port 465
              auth: {
                user: "akshatsharma.austere@gmail.com",
                pass: "fvqv nbrz mhan vqky",
              },
              tls: {
                rejectUnauthorized: false,
              },
            });

            console.log(transporter);

            const mailOptions = {
              from: "akshatsharma.austere@gmail.com",
              to: user.email,
              subject: "Password Reset Request",
              text: `You requested a password reset. Please use the following link to reset your password: http://localhost:3000/reset-password?token=${resetToken}&email=${user.email}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.error("Email Error:", error);
                return res.status(500).json({ message: "Error sending email" });
              }

              res.status(200).json({ message: "Password reset email sent" });
            });
          }
        );
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async ResetPassword(req, res) {
    try {
      const { token, email, newPassword } = req.body;

      if (!token || !email || !newPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the user exists and if the token is valid
      const checkUserQuery = "SELECT * FROM users WHERE email = ?";
      con.query(checkUserQuery, [email], async (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return res.status(500).json({ message: "Database error" });
        }

        if (result.length === 0) {
          return res.status(404).json({ message: "Invalid token or email" });
        }

        const user = result[0];

        // Check if the token is valid
        const isTokenValid = await bcrypt.compare(token, user.reset_token);
        if (!isTokenValid || user.token_expiration < new Date()) {
          return res.status(400).json({ message: "Invalid or expired token" });
        }

        // Hash the new password and update the user record
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatePasswordQuery =
          "UPDATE users SET password = ?, reset_token = NULL, token_expiration = NULL WHERE email = ?";
        con.query(
          updatePasswordQuery,
          [hashedPassword, email],
          (err, result) => {
            if (err) {
              console.error("Database Error:", err);
              return res.status(500).json({ message: "Database error" });
            }

            res.status(200).json({ message: "Password reset successful" });
          }
        );
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
}

module.exports = new AuthController();
