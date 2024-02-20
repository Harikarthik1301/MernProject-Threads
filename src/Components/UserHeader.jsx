import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {CgMoreO} from "react-icons/cg"

const UserHeader = () => {
    const toast = useToast();

    const copyURL = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL).then(() => {
			toast({
				title: "Success.",
				status: "success",
				description: "Profile link copied.",
				duration: 3000,
				isClosable: true,
			});
		});
	};

  return (
   <VStack gap={4} alignItems={"start"}>
    <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
                Hari
            </Text>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>Harikarthik</Text>
                <Text fontSize={"x-small"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                    Threads.Net
                </Text>
            </Flex>
        </Box>
        <Box>
            <Avatar name='Hari' src='/hari-avatar.png'size={"xl"}/>
        </Box>
    </Flex>
     <Text>Co-founder , Executive chairman and CEO of Alpha Platforms.</Text>
   <Flex w={"full"} justifyContent={"space-between"}>
    <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"}>7.7M followers</Text>
        <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
     <Link color={"gray.light"}>instagram.com</Link>
    </Flex>
    <Flex>
    <Box className='icon-container'>
       <BsInstagram size={24} cursor={"pointer"} />
	</Box>
    <Box className='icon-container'>
     <Menu>
      <MenuButton>
       <CgMoreO size={24} cursor={"pointer"} />
      </MenuButton>
      <Portal>
       <MenuList bg={"gray.dark"}>
        <MenuItem bg={"gray.dark"} onClick={copyURL}>copy link</MenuItem> 
       </MenuList>
      </Portal>
     </Menu>
	</Box>
    </Flex>
   </Flex>
   </VStack>
  )
}

export default UserHeader