import WorkGridItem from "./WorkGridItem/WorkGridItem";
import bg from "../../../../assets/main/work/misc/bg.svg";

const WorkGrid = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <WorkGridItem
          src={bg}
          alt="alt"
          title="title"
          desc="desc"
          techStack="techStack"
        />
      </div>
    </div>
  );
};

export default WorkGrid;
