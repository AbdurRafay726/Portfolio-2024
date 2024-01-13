import ItemOfList from "../../components/ItemOfList";

export default function Bankist() {
  return (
    <ul className="text-[0.2vw] list-inside ">
      {/* Item 1 */}
      {/* Item 1 */}
      <ItemOfList title="Overview:">
        The Bankist page is a dedicated section of a bank website, facilitating
        transactions, loan requests, and providing an overview of the entire
        transaction history.
      </ItemOfList>
      {/* Item 2 */}
      <ItemOfList title="Key Features:">
        Key features include transaction processing, loan requests, fund
        transfers, transaction display and sorting, along with a logged-in timer
        for user activity tracking.
      </ItemOfList>
      {/* Item 3 */}
      <ItemOfList title="Technologies:">
        This project is constructed using fundamental frontend technologies,
        including JavaScript, CSS, and HTML.
      </ItemOfList>
      {/* Item 4 */}
      <ItemOfList title="Description:">
        This JavaScript project incorporates array methods and manipulations,
        event listeners, and functions to create a banking page. The page
        enables transactions, loan requests, account closures, and displays
        transaction history with sorting functionality. Additionally, a
        logged-in timer initiates upon user login, automatically logging the
        user out upon timer completion.
      </ItemOfList>
    </ul>
  );
}
