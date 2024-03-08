import { Avatar, Box, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from '@chakra-ui/react'
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
        <Flex w={"full"} alignItems={"center"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mahendra Singh Dhoni
            </Text>
            <Image src='/verified.png' w={4} h={4} ml={1}/>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>MSD</Text>
                <Text fontSize={"x-small"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                    Threads.Net
                </Text>
            </Flex>
        </Box>
        <Box>
            <Avatar name='Hari' src='/msdpro.jpg'size={"xl"}/>
        </Box>
    </Flex>
     <Text>Formal Captain of Indian Cricket Team ,Captain of CSK.</Text>
   <Flex w={"full"} justifyContent={"space-between"}>
    <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"}>1.7M followers</Text>
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
   <Flex w={"full"}>
    <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
        <Text fontWeight={"bold"}>Posts</Text>
    </Flex>
    <Flex flex={1} borderBottom={"1px solid gray"} color={"gray.light"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
        <Text fontWeight={"bold"}>Replies</Text>
    </Flex>
   </Flex>
   </VStack>
  )
}

export default UserHeader