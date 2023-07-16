import Info from '../assets/info.svg';
import Check from '../assets/check.svg'

export default function Home() {
  return (
    <div className="flex gap-8 mt justify-center mt-[25vh]">
      <div className="bg-white h-[28.375rem] w-[24rem] rounded-lg px-8 pt-12 box-border shadow hover:border hover:border-purple200 hover:scale-110 duration-200">
        <header className="flex flex-col text-gray800 text-lg">
          <div>
            <p className="text-purple200 text-sm font-semibold uppercase">Para você começar</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <strong className="text-3xl">Essentials</strong>
            <p>R$<span className="font-bold text-2xl">19,97</span>/mês</p>
          </div>
        </header>
        <main>
          <button className="border border-gray800 w-full rounded h-14 shadow shadow-gray200 font-bold mt-8 hover:bg-gray800 hover:text-white duration-100">
            Assinar agora
          </button>
          <div className="text-gray600 text-base border border-t-gray200 border-x-white border-b-white mt-8 pt-8 flex flex-col gap-4">
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Até 3 usuários</span><img src={Info.src} alt="" /></p>
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Autoatendimento</span><img src={Info.src} alt="" /></p>
          </div>
        </main>
      </div>
  
      <div className="bg-gray900 h-[28.375rem] w-[24rem] rounded-lg px-8 relative hover:scale-110 duration-200">
        <div className='flex justify-center mt-[-1.0625rem]'>
          <p className='bg-orange absolute uppercase text-xs font-bold py-2 px-4 rounded-md'>Mais vantajoso</p>
        </div>
        <header className="flex flex-col text-gray50 text-lg mt-[4rem]">
          <div>
            <p className='text-purple100 text-sm font-semibold uppercase'>Para você decolar</p>
          </div>
          <div className="flex justify-between items-center mt-2">
          <strong className="text-3xl">Ultimate</strong>  
          <p>R$<span className="font-bold text-2xl">29,97</span>/mês</p>
          </div>
        </header>
        <main>
          <button className="bg-purple100 hover:bg-purple200 duration-100 text-white w-full rounded h-14 font-bold mt-8">
            Assinar agora
          </button>
          <div className="text-gray300 text-base border border-t-gray700 border-x-gray900 border-b-gray900 mt-8 pt-8 flex flex-col gap-4">
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Usuários ilimitados</span><img src={Info.src} alt="" /></p>
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Suporte 24/7</span><img src={Info.src} alt="" /></p>
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />CSM Dedicado</span><img src={Info.src} alt="" /></p>
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Treinamentos</span><img src={Info.src} alt="" /></p>
          </div>
        </main>
      </div>   

      <div className="bg-white h-[28.375rem] w-[24rem] rounded-lg px-8 pt-12 shadow hover:border hover:border-purple200 hover:scale-110 duration-200">
        <header className="flex flex-col text-gray800 text-lg">
          <div>
            <p className="text-purple200 text-sm font-semibold uppercase">Para sua empresa</p>
          </div>
            <strong className="text-3xl mt-2">Enterprise</strong>
        </header>
        <main>
          <button className="border border-gray800 w-full rounded h-14 shadow shadow-gray200 font-bold mt-8 hover:bg-gray800 hover:text-white duration-100">
            Fale com a gente
          </button>
          <div className="text-gray600 text-base border border-t-gray200 border-x-white border-b-white mt-8 pt-8 flex flex-col gap-4">
            <p className='flex justify-between'><span className='flex gap-2'><img src={Check.src} alt="" />Plano customizado especialmente para a necessidade de seu negócio</span></p>
          </div>
        </main>
      </div>
    </div>
  )
}
