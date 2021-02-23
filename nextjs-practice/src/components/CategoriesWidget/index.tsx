import React from "react";

const CategoriesWidget = ({ data }) => {
  return (
    <div className="w-full md:w-64">
      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">
          Categories
        </h3>

        <div className="p-4">
          <ul className="list-reset leading-normal">
            {data.map((item) => (
              <li>
                <a href="#" className="text-gray-darkest text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default CategoriesWidget;
