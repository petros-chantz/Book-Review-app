import './App.css';
import { AppWrapper } from "./AppStyles";
import BodyTitleBox from './BodyTitleBox';
import ShowcaseBooks from './ShowcaseBooks';

export default function App() {
  return (
    <AppWrapper>
      <BodyTitleBox />
      <ShowcaseBooks/>
    </AppWrapper>
  );
}


