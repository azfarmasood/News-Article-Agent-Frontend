
import NewsPage from "@/components/widgets/practice/check";
import DailyMaleNews from "@/components/widgets/practice/DailyMale";
import Footer from "@/components/widgets/practice/Footer";
// import GaurdianNews from "@/components/widgets/practice/Gurdian";
import IndependentNews from "@/components/widgets/practice/Independent";
import Navbar from "@/components/widgets/practice/Navbar";
import TelegraphNews from "@/components/widgets/practice/Telegraph";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NewsPage />
      <TelegraphNews />
      {/* <GaurdianNews /> */}
      <DailyMaleNews />
      <IndependentNews />
      <Footer />
    </main>
  );
}
