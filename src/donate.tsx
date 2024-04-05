import { For, JSX, createEffect, createSignal } from "solid-js";

interface CPair {
  type: string,
  address: string
}

const addresses: Array<CPair> = [{
  type: "btc",
  address: "bc1qen29n05zxh0qdflguwd9ww8n4x80ekms2ktp7f"
}, {
  type: "eth(include usdt,usdc,polygon),avax",
  address: "0x5E3dBe5A7323116787F3B8d73B373B1E1E87DBf7"
}, {
  type: "sol(include usdt,usdc)",
  address: "AgkYzP6epbkM9PwK2LDpoktSrgxDDfwAxQEeCVuvmM8U"
},{
  type: "xrp",
  address: "rBSrNady2uadJcNEYYG1chodvXyRWYwBro"
},{
  type: "ada",
  address: "addr1q9hw57vsxc2cn6zpxr8qalygelfyeded7r5sm67dj9ayyznwafueqds4385yzvxwpm7g3n7jfjmjmu8fph4umyt6gg9qs9qkcy"
},{
  type: "bch",
  address: "qr9p8txf06jenudlm7yazsx2r6twtj8jgc68zcfeva"
},{
  type: "ltc",
  address: "LfJQS65MgeiJXGkHtPQnirWr92SttNZXhk"
},{
  type: "atom",
  address: "cosmos1z592423lgu4g4mcp5nmchqmc0daftphkkrm0zh"
},{
  type: "etc",
  address: "0x5319857cBaf3b88aAc96702F16bb35a25a39f928"
},{
  type: "xlm",
  address: "GD7NHRI7KINK5WSCPUL73HC3OLNITW7IJOIRYJJGEC4NMTG6BU4MFBW3"
},{
  type: "xmr",
  address: "48ikVWgH3pXUWUDvA38g3geGiQnLxpSUfbkScodZPQTQKvQCex8UY6X9iLBmwj3guF5Cy1jzqRehzd3rZNdGe6Gp3p746QB"
},{
  type: "neo(include gas)",
  address: "Aef9kxznER4bUN496j7G42vAjCXWSsCady"
},{
  type: "btg",
  address: "GKz8wbRLhMHDkoQF4pHoJb6eMxSkZsKKXg"
},{
  type: "zec",
  address: "t1ec5hxGnqj6cMKFcuENKq7nDFbyqXVhsrQ"
},{
  type: "xem",
  address: "NAGNEPJC5FPZAKN5QIQDOCRS3JS62UU6WZPYJH4V"
},{
  type: "ont(include ong)",
  address: "Adyd2pNwKL4RU4CVtAB4LCQYZGZWH3MNYU"
}]
addresses.sort((a,b)=>(a.type>b.type)?1:((b.type>a.type)?-1:0))

export function Donate(): JSX.Element {
  createEffect(()=>alert(`address: ${selected()}`))
  const [selected, setSelected] = createSignal("");
  return (
    <div class="flex flex-col bg-ctp-base w-screen h-screen">
      <div class="w-full h-full bg-ctp-base flex items-center justify-center flex-col gap-4">
        <h1 class="text-ctp-text font-bold text-4xl mt-10">Donate</h1>
        <a class="text-ctp-blue text-3xl" href="https://github.com/sponsors/MisileLab">Github Sponsor</a>
        <a class="text-ctp-subtext1 text-3xl">or select crypto</a>
        <div class="flex flex-row border-4 border-ctp-yellow bg-ctp-base">
          <select class="bg-ctp-base selection:appearance-none selection:text-3xl text-ctp-text" value={selected()} onchange={(a)=>{setSelected(a.target.value)}}>
            <For each={addresses}>
              {(i,_)=>{
                return <option value={i.address}>{i.type}</option>
              }}
            </For>
          </select>
         </div> 
      </div>
    </div>
  );
}

