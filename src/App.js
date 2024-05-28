import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./style/main.less";
import April from "./pages/audio/April";
import Home from "./pages/audio/Home";
import May from "./pages/audio/May";
import June from "./pages/audio/June";
import July from "./pages/audio/July";
import August from "./pages/audio/August";
import September from "./pages/audio/September";
import October from "./pages/audio/October";
import November from "./pages/audio/November";
import December from "./pages/audio/December";
import January from "./pages/audio/January";
import February from "./pages/audio/February";
import March from "./pages/audio/March";
import Branches from "./pages/branches/Branches";
import AlwaysFars from "./pages/custom/AlwaysFars";
import CollectionPaperBoats from "./pages/custom/CollectionPaperBoats";
import Interpretations from "./pages/custom/Interpretations";
import Cuneiform from "./pages/custom/Cuneiform";
import Wisdom from "./pages/custom/Wisdom";
import RedTrees from "./pages/custom/RedTrees";
import CollectionTrees from "./pages/custom/CollectionTrees";
function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="کارگزاری آتیه"
        defaultTitle="کارگزاری آتیه"
      ></Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farvardin" element={<April />} />
        <Route path="/ordibehesht" element={<May />} />
        <Route path="/khordad" element={<June />} />
        <Route path="/tir" element={<July />} />
        <Route path="/mordad" element={<August />} />
        <Route path="/shahrivar" element={<September />} />
        <Route path="/mehr" element={<October />} />
        <Route path="/aban" element={<November />} />
        <Route path="/azar" element={<December />} />
        <Route path="/dey" element={<January />} />
        <Route path="/bahman" element={<February />} />
        <Route path="/esfand" element={<March />} />
        <Route path="/collectionPaperBoats" element={<CollectionPaperBoats />} />
        <Route path="/cuneiform" element={<Cuneiform />} />
        <Route path="/alwaysFars" element={<AlwaysFars />} />
        <Route path="/interpretations" element={<Interpretations />} />
        <Route path="/wisdom" element={<Wisdom />} />
        <Route path="/redTrees" element={<RedTrees />} />
                <Route path="/collectionTrees" element={<CollectionTrees />} />
        <Route path="/branchs" element={<Branches />} />
      </Routes>
    </Router>
  );
}

export default App;
