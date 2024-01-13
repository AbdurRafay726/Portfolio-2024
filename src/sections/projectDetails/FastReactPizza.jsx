import ItemOfList from "../../components/ItemOfList";

export default function FastReactPizza() {
  return (
    <ul className="text-[0.2vw] list-inside my-6 space-y-[0.7vw]">
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The Fast React Pizza is a Single Page Application (SPA) designed for
        pizza ordering, created using React.js. It encompasses a menu page, a
        cart, and an order confirmation page, enhanced with automatic location
        decoding.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        The core features include soliciting user names, fetching the menu from
        an API, adding pizzas to the cart with dynamic item quantities, and an
        order confirmation page that utilizes the Geolocation API to
        automatically obtain the customer's location.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project utilizes React, React Router DOM, React Redux Toolkit, and
        Tailwind CSS for styling.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This React project leverages React Router DOM for seamless navigation,
        transforming it into a single-page application. Redux Toolkit for
        centralizing the application state. Menu data is fetched from a server,
        and items are checked for availability; sold-out items appear gray,
        while available items can be added to the cart. The Geolocation API is
        utilized to fetch the customer's location, with an option to edit.
        Additionally, a priority option is available, incurring an extra cost in
        exchange for expedited processing time.
      </ItemOfList>
    </ul>
  );
}
