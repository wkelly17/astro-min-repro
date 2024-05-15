import {createSignal, createEffect} from "solid-js";

const TestComponent = () => {
  const [random, setRandom] = createSignal<boolean>(false);

  const handleClick = () => {
    setRandom((prev) => !prev);
  };

  createEffect(() => console.log(random()));

  return (
    <button
      class="size-[200px] shrink-0 rounded-lg bg-[#272727] px-3 py-2 shadow-inner shadow-[#1a1a1a]"
      onClick={handleClick}
    >
      {random() ? "true" : "false"}
    </button>
  );
};

export {TestComponent};
