import Typewriter from "typewriter-effect";

export default function TypeStartInfo() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Lucas Rossi</span>'
            )
            .pauseFor(2500)
            .deleteAll()
            .typeString(
              '<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Un desarollador de paginas web</span>'
            )
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
        options={{ 
          loop: true,
         }}
      />
    </div>
  );
}
