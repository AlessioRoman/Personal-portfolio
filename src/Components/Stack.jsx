import BallCanvas from "./BallCanvas";
import tech from "./../data/technologies";

function Stack() {
  return (
    <div className="w-1/2 m-auto">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {tech.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;