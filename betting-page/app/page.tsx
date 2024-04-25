import Fixtures from "@/components/Fixtures";

const Home = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Main
        {<Fixtures />}
      </div>
    );
}
export default Home;