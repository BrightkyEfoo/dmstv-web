import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  color: string;
  backColor: string;
  text: string;
  hovColor: string;
  hovBackColor: string;
  link:string;
};

const Button1: FC<Props> = ({
  color,
  backColor,
  text,
  hovBackColor,
  hovColor,
  link
}) => {
  return (
    <Button
    height={'50px'}
      color={color}
      backgroundColor={backColor}
      borderColor={color}
      transition={'all ease 300ms'}
      borderWidth={"2px"}
      fontSize={'md'}
      borderStyle={"solid"}
      rounded={'none'}
      paddingLeft={25}
      paddingRight={25}
      _hover={{
        color : hovColor,
        borderColor : hovBackColor,
        backgroundColor : hovBackColor,

      }}
    >
      {text}
    </Button>
  );
};

export default Button1;
