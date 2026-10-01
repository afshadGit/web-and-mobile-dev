import { FaGithub, FaInstagram } from "react-icons/fa";

// Profile Card Component
export default function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        margin: "10px 0",
        maxWidth: "300px",
      }}
    >
      <h2>
        {props.name}{" "}
        {props.isOnline && (
          <span style={{ color: "green", fontSize: "14px" }}>● Online</span>
        )}
      </h2>
      <p>
        <strong>Role :</strong> {props.role}
      </p>
      <p>
        <strong>Age :</strong> {props.age}
      </p>
      <p>
        <strong>Bio :</strong> {props.bio}
      </p>
      <div>
        <strong>Socials :</strong>
        <ul>
          <li>
            <FaGithub /> GitHub: {props.socials.github}
          </li>
          <li>
            <FaInstagram /> Instagram: {props.socials.instagram}
          </li>
        </ul>
      </div>
    </div>
  );
}
