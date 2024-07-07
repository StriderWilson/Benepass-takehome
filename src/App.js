import { useState } from 'react';
import './App.css';

import {
  CardDescription,
  Heading,
} from './Global/StyledComponents/AppStyledComponents';
import Checkbox from './Global/Components/Checkbox';
import FlexCard from './Global/Components/FlexCard';
import GlobalStyles from './Global/StyledComponents/GlobalStyles';
import { StateProvider } from './Controllers/contexts/StateContext';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleCheckboxChange = () => {
    setShowDetails(prevState => !prevState);
  }
  return (
      <>
        <GlobalStyles />
        <StateProvider values={{ showDetails }}>
            <Heading>
              Flex Card
            </Heading>
            <CardDescription>
              Used for pre-tax purchases
            </CardDescription>
            <FlexCard />
            <br/>
            <Checkbox
              checked={showDetails}
              onChange={handleCheckboxChange}
              label="Show Details"
            />
        </StateProvider>
      </>
  );
}

export default App;
