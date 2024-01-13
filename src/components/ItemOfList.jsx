import { HiCode } from "react-icons/hi";

export default function ItemOfList({ title, children }) {
  return (
    <li className="flex items-start marginbottom">
      <span className="mr-4 mt-[6px]">
        <HiCode className="text-mainGreen" />
      </span>
      <div>
        <p>
          <span className="font-bold text-nowrap mr-3">{title}</span>
          {children}
        </p>
      </div>
    </li>
  );
}
