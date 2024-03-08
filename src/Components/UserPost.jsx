import { Avatar, Box, Flex ,Image,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Actions from './Actions'

const UserPost = ({postTitle,postImage,comments,likes}) => {
    const [liked , setliked] = useState(false);
  return (
    <Link to={"/msd/post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar size={"md"} name="msd" src='/msdpro.jpg'/>
                <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
                <Box position={"relative"} w={"full"}>
                <Avatar
							size='xs'
							name='John'
							src='https://bit.ly/code-beast'
							position={"absolute"}
							top={"0px"}
							left='15px'
							padding={"2px"}
						/>
                 	<Avatar
							size='xs'
							name='doe'
							src='https://bit.ly/kent-c-dodds'
							position={"absolute"}
							bottom={"0px"}
							right='-5px'
							padding={"2px"}
						/>
	                <Avatar
							size='xs'
							name='Jodo'
							src='https://bit.ly/dan-abramov'
							position={"absolute"}
							bottom={"0px"}
							left='4px'
							padding={"2px"}
						/>
                </Box>
            </Flex>
            <Flex flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Flex w={"full"} alignItems={"center"}>
                        <Text fontSize={"sm"} fontWeight={"bold"} >Mahendra Singh Dhoni</Text>
                        <Image src='/verified.png' w={4} h={4} ml={1}/>
                    </Flex>
                    <Flex gap={4} alignItems={"center"}>
							<Text fontStyle={"sm"} color={"gray.light"}>
								1d
							</Text>
							<BsThreeDots />
						</Flex>
                </Flex>
                <Text fontSize={"sm"}>{postTitle}</Text>
              <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
              <Image src={postImage} w={"full"}/>
              </Box>
              <Flex gap={3} my={1}>
                <Actions liked={liked} setLiked={setliked}/>
              </Flex>
              <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"} fontSize={"sm"}>{comments} replies</Text>
                <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
                <Text color={"gray.light"} fontSize={"sm"}>{likes} likes</Text>
              </Flex>
            </Flex>
        </Flex>
    </Link>
  )
}

export default UserPost