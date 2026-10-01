import "./App.css";
import UserProfile from "./components/UserProfile.jsx";

function App() {
  return (
    <div className="app-layout">
      <aside className="profile-column">
        <h2>User Profiles</h2>

        <UserProfile
          name="Ikramah Elahi"
          role="CEO"
          age={22}
          isOnline={true}
          bio="I'm CEO, bro."
          socials={{ github: "@ikramahelahi", instagram: "@_.ikramahelahi._" }}
        />

        <UserProfile
          name="Azfar Ali"
          role="CFO"
          age={22}
          isOnline={false}
          bio="Aim for the Claude, and if you miss, you will hit the GPTs."
          socials={{ github: "@azfar-19", instagram: "@theofficialazfarali" }}
        />

        <UserProfile
          name="Abdul Moiz Ahmed"
          role="Delivery Rider"
          age={21}
          isOnline={true}
          bio="Meat deliveries are my passion."
          socials={{ github: "@AbdulMoizAhmd", instagram: "@makesomemoiz" }}
        />
      </aside>
    </div>
  );
}
export default App;
