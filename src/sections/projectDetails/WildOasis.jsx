import ItemOfList from "../../components/ItemOfList";

export default function WildOasis() {
  return (
    <ul className="text-[0.2vw] list-inside my-6 space-y-[0.7vw]">
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The Wild Oasis is a Single Page Application (SPA) designed to monitor
        cabin bookings at a luxury restaurant. It effectively manages guest
        check-ins, checkouts, and offers insightful activity charts for various
        durations.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        Core features comprise user authentication, server-side data
        manipulation, a versatile dashboard, sorting functionality, varied API
        integrations, and dynamic rendering charts.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project leverages Vite, React, React Router DOM, React Query,
        Styled Components, and additional libraries for handling dates, icons,
        and alerts.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This React project, developed with Vite, employs React Router DOM for
        seamless navigation across various routes while maintaining a
        single-page application structure. Supabase serves as the backbone for
        the backend of this application. Additionally, remote state management
        is handled using React Query, and styling is achieved through Styled
        Components, a CSS library. The project also integrates libraries such as
        date-fns for efficient date management, toasts for alerts, react-icons
        for icons, and Recharts for creating visually appealing charts.
      </ItemOfList>
    </ul>
  );
}
