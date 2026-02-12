import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  // initially it will just pass category as "all"
  const [activeCategory, setActiveCategory] = useState("all");
  const changeCategoryHandler = (activeCat) => {
    // setting the category based on state
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };
  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${activeCategory === category ? "primary" : "white"}`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
