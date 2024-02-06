import { HoverCard } from "@kobalte/core";
import { For, Index, JSX } from "solid-js";
import { AiFillGithub, AiOutlineMail } from 'solid-icons/ai';
import { FaBrandsDiscord } from "solid-icons/fa";

interface RawStack {
  icon: string,
  url: string
}

const Stack: {[id: string]: RawStack} = {
  "solidjs": {icon: "/icons/solidjs.svg", url: "https://solidjs.com"},
  "tailwindcss": {icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com"},
  "rust": {icon: "/icons/rust.svg", url: "https://www.rust-lang.org"},
  "python": {icon: "/icons/python.svg", url: "https://www.python.org"},
  "tauri": {icon: "/icons/tauri.svg", url: "https://tauri.app"},
  "c": {icon: "/icons/c.svg", url: "https://clang.llvm.org"}
};

function StringstoRawStack(values: string[]): RawStack[] {
  return values.map((value) => Stack[value]);
}

interface Project {
  name: string;
  description: string;
  url: string;
  stacks: RawStack[];
}

interface Contact {
  icon: JSX.Element,
  content: string,
  url: string
}

const projects: Project[] = [
  {
    "name": "Portfolio",
    "description": "This page",
    "url": "https://github.com/misilelab/portfolio",
    "stacks": StringstoRawStack(["solidjs", "tailwindcss"])
  },
  {
    "name": "Ignofier+",
    "description": "Fast gitignore generator that made with Rust",
    "url": "https://github.com/misilelab/ignofierplus",
    "stacks": StringstoRawStack(["rust"])
  },
  {
    "name": "Klojure",
    "description": "Search koreanbots with multiple keywords",
    "url": "https://github.com/lawnseol/klojure",
    "stacks": StringstoRawStack(["python"])
  },
  {
    "name": "McCmd",
    "description": "Minecraft-style Interpreter",
    "url": "https://github.com/mcCmd-language/xmccmd",
    "stacks": StringstoRawStack(["c"])
  },
  {
    "name": "sntapi",
    "description": "Sunrint school meal api",
    "url": "https://github.com/MisileLab/h3/tree/78c1d37ace0c612915e44e91e6cfec38d7842508/archives/sntapi",
    "stacks": StringstoRawStack(["python"])
  }, {
    "name": "calendar",
    "description": "Simple calendar with tailwindcss, solidjs, tauri",
    "url": "https://github.com/MisileLab/calendar",
    "stacks": StringstoRawStack(["solidjs", "tailwindcss", "tauri", "rust"])
  }, {
    "name": "anasite",
    "description": "AnA website",
    "url": "https://github.com/sunrint-ana/anasite",
    "stacks": StringstoRawStack(["solidjs", "tailwindcss"])
  }
];

const App = () => {
  const contacts: Contact[] = [
    {
      "content": "misileminecord@gmail.com",
      "url": "mailto:misileminecord@gmail.com",
      "icon": (<AiOutlineMail size={24} />)
    },
    {
      "content": "misilelab",
      "url": "https://github.com/misilelab",
      "icon": (<AiFillGithub size={24} />)
    },
    {
      "content": "misile",
      "url": "https://discord.com",
      "icon": (<FaBrandsDiscord size={24}/>)
    }
  ];
  return (
    <div class="flex flex-col bg-ctp-base" style={"width: 100%;"}>
      <div class="w-full h-screen flex justify-center items-center flex-col">
        <div class="text-3xl text-ctp-subtext0 font-normal mb-2">Many <span class="text-ctp-red">fails</span> lead to one <span class="text-ctp-green">success</span></div>
        <div class="text-4xl text-ctp-text font-bold">Misile</div>
        <div class="flex flex-row mt-2 text-ctp-text space-x-1">
          <Index each={contacts}>
            {(i, _) => {
              return (
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <a href={i().url}>{i().icon}</a>
                  </HoverCard.Trigger>
                  <HoverCard.Content class="bg-ctp-surface0 hc">
                    <HoverCard.Arrow />
                    <p class="text-ctp-yellow">{i().content}</p>
                  </HoverCard.Content>
                </HoverCard.Root>
              );
            }}
          </Index>
        </div>
      </div>
      <div class="w-full flex flex-col items-center">
        <div class="text-3xl text-ctp-text font-bold mt-4">
          Projects
        </div>
        <div class="w-full flex flex-col justify-center items-center pl-20 pr-20">
          <table class="mt-4 border-spacing-2 border-separate w-full border-solid border-ctp-overlay border-2">
            <thead>
              <tr class="text-xl text-ctp-subtext1 w-1/2">
                <th>Title</th>
                <th>Description</th>
                <th>Stacks</th>
              </tr>
            </thead>
            <tbody class="text-2xl text-ctp-subtext0 text-center">
              <Index each={projects}>
                {(i, _) => {
                  return (<tr>
                    <td><a href={i().url} class="text-ctp-blue">{i().name}</a></td>
                    <td>{i().description}</td>
                    <td class="flex flex-row"><For each={i().stacks}>
                      {(j) => <a href={j.url}><img src={j.icon} class="w-8 h-8" /></a>}
                    </For></td>
                  </tr>);
                }}
              </Index>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
