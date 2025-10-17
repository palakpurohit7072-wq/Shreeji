// import React, { useState } from "react";
// import "../Styles/Changepassword.css";
// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState(""); // success or error

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 🔹 Field validation
//     if (!currentPassword || !newPassword || !confirmPassword) {
//       setMessage("⚠️ All fields are required.");
//       setMessageType("error");R
//       return;
//     }

//     // 🔹 New password same as old password check
//     if (currentPassword === newPassword) {
//       setMessage("❌ New password cannot be the same as current password.");
//       setMessageType("error");
//       return;
//     }

//     // 🔹 Confirm password match check
//     if (newPassword !== confirmPassword) {
//       setMessage("❌ New passwords do not match.");
//       setMessageType("error");
//       return;
//     }

//     // ✅ Success message
//     setMessage("✅ Password updated successfully!");
//     setMessageType("success");

//     // Reset fields
//     setCurrentPassword("");
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   return (
//     <div className="change-password-wrapper">
//       <div className="change-password-card">
//         <h2>Change Password</h2>
//         <p className="subtitle">
//           Keep your account secure by updating your password regularly.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Current Password</label>
//             <input
//               type="password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               placeholder="Enter current password"
//             />
//           </div>

//           <div className="form-group">
//             <label>New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               placeholder="Enter new password"
//             />
//           </div>

//           <div className="form-group">
//             <label>Confirm New Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Re-enter new password"
//             />
//           </div>

//           <button type="submit" className="update-btn">
//             Update Password
//           </button>

//           {message && (
//             <p className={messageType === "success" ? "success-msg" : "error-msg"}>
//               {message}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;
