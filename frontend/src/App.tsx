import Header from "@/components/ui/Header";

const App = () => {
  const sample = [
    { name: "test", url: "www.youtube.com" },
    { name: "test", url: "www.youtube.com" },
    { name: "test", url: "www.youtube.com" },
    { name: "test", url: "www.youtube.com" },
  ];
  return (
    <>
      <Header headerLinks={sample}></Header>
    </>
  );
};

export default App;
