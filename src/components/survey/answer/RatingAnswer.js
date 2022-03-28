import React, {useState} from 'react';

import {Box} from 'rebass';
import List from 'components/ui/List';
import RatingStar from 'components/ui/RatingStar';
import Tooltip from 'components/ui/Tooltip';

function RatingAnswer({choices, disabled, onChange, value}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <List>
      {choices.map((choice, index) => {
        return (
          <Tooltip key={choice} content={choice}>
            <Box
              onMouseOver={() => !disabled && setActiveIndex(index)}
              onMouseLeave={() => !disabled && setActiveIndex(-1)}
              p={1}>
              <RatingStar
                disabled={disabled}
                isActive={
                  activeIndex === -1 ? index <= value : index <= activeIndex
                }
                isHovered={activeIndex !== -1 && index <= activeIndex}
                onClick={() => onChange(index)}
              />
            </Box>
          </Tooltip>
        );
      })}
    </List>
  );
}

export default RatingAnswer;
