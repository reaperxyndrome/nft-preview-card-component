import EthereumIcon from "./assets/images/icon-ethereum.svg";
import ClockIcon from "./assets/images/icon-clock.svg";
import ViewIcon from "./assets/images/icon-view.svg";
import EquilibriumImage from "./assets/images/image-equilibrium.jpg";
import AvatarImage from "./assets/images/image-avatar.png";

function App() {

  return (
    <div className="bg-secondary-main-BG h-[100vh]">
      <section className="absolute font-outfit w-card h-card bg-secondary-card-BG p-6 pb-8 max-md:pb-6 rounded-2xl top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 max-md:w-[327px] max-md:h-fit">
        <div className="relative mb-6">
          <img src={EquilibriumImage} className="rounded-lg" />
          <div className="absolute flex justify-center items-center inset-0 bg-primary-cyan/50 opacity-0 hover:opacity-100 hover:cursor-pointer rounded-lg">
            <img src={ViewIcon}></img>
          </div>
        </div>
        <h1 className="text-heading font-semibold text-[white] mb-4 max-md:mb-3 max-md:leading-7 hover:text-primary-cyan hover:cursor-pointer">  Equilibrium #3429</h1>
        <p className="text-body text-primary-soft-blue font-light mb-6 max-md:mb-4">  Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between items-center mb-6 max-md:mb-4">
          <div className="flex">
            <img src={EthereumIcon} className="inline self-center mr-1.5" />
            <span className="text-caption text-primary-cyan"> 0.041 ETH </span>
          </div>
          <div className="flex">
            <img src={ClockIcon} className="inline self-center mr-2" />
            <span className="text-caption text-primary-soft-blue"> 3 days left</span>
          </div>
        </div>
        <div className="h-[1px] bg-secondary-line mb-4"></div>
        <img src={AvatarImage} className="inline w-8 h-8 mr-4 border border-white rounded-full " />
        <p className="inline w-fit text-primary-soft-blue">Creation of <span className="text-[white] hover:text-primary-cyan hover:cursor-pointer">Jules Wyvern</span></p>
      </section>

    </div>
  )
}

export default App
