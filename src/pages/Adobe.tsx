import React, { useRef, type FC } from 'react';
import {
  Box, Spacer
} from '@chakra-ui/react';

import '../styles/styles.css';

import Navbar from '../components/Navbar';
import AdobeIntro from '../components/adobe/AdobeIntro';
import Pieces from '../components/adobe/Pieces';
import { PrototypeFrame } from '../styles/components';
import Clicking from '../components/adobe/Clicking';
import Unforgettable from '../components/adobe/Unforgettable';
import BackToTop from '../components/shared/BackToTop';
import { PROTOTYPES } from '../constants';
import Choosing from '../components/adobe/Choosing';

const Adobe: FC = () => {
  const takeawaysRef = useRef<HTMLDivElement>(null);
  const scrollToTakeaways = (): void => {
    takeawaysRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Navbar isWork={true} />
      <Box
        mt="100px"
        mx='20vw'
      >
        <AdobeIntro scrollToTakeaways={scrollToTakeaways} />
        <Spacer height='200px' />

        <PrototypeFrame className='wide-prototype' src={PROTOTYPES.adobeCert} />
        <Spacer height='200px' />

        <Choosing />
        <Spacer height='200px' />

        <Pieces />
        <Spacer height='200px' />

        <Clicking />
        <Spacer height='200px' />

        <Unforgettable takeawaysRef={takeawaysRef} />
        <Spacer height='200px' />

        <BackToTop />
        <Spacer height='50px' />
      </Box>
    </Box>
  );
};

export default Adobe;
