import { Bleed, Box, Button, Card, Dialog, DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { useState } from "react";
import FAQ from "./FAQ";


export const Cards = () => {

    const [open, setOpen] = useState(false)

    return (

        <Grid templateColumns="repeat(3, 1fr)" gap="6">



            <GridItem>
                <Card.Root maxW="sm" overflow="hidden" variant={"elevated"}>
                    <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UKs-VqXSZmFceyqSz9usgwHaEK%26pid%3DApi&f=1&ipt=f429cecf5c0d25a26c18dc239e5eb12f13a61ffebf6b99ef7b596fc454863012&ipo=images"
                    alt="Green double couch with wooden legs"
                    />
                    <Card.Body gap="2">
                    <Card.Title>Auto Fob Replacement</Card.Title>
                    <Card.Description>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces.
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        $450
                    </Text>
                    </Card.Body>
                    <Card.Footer gap="2">
                    <Button variant="solid">Add to cart</Button>
                    </Card.Footer>
                </Card.Root> 
            </GridItem>

            <GridItem>
                <Card.Root maxW="sm" overflow="hidden" variant={"elevated"}>
                    <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdi-uploads-pod13.dealerinspire.com%2Fmcdonaldhyundai%2Fuploads%2F2021%2F06%2FKey-Fob-Broken-500x444.jpg&f=1&nofb=1&ipt=ddb36a0394ee909fac84b53b1e2c98be9071f653bb4dc708688e7233fdd6deda&ipo=images"
                    alt="Green double couch with wooden legs"
                    />
                    <Card.Body gap="2">
                    <Card.Title>Auto Fob Repair</Card.Title>
                    <Card.Description>
                        Broken or none functioning Fob? We can fix it!
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        $25
                    </Text>
                    </Card.Body>
                    <Card.Footer gap="2">
                    <Button variant="solid">Fast</Button>
                    <Button variant="ghost"></Button>
                    </Card.Footer>

                </Card.Root> 
            </GridItem>

            <GridItem>
                <Card.Root maxW="sm" overflow="hidden" variant={"elevated"}>
                    <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.locksmithledger.com%2Ffiles%2Fbase%2Fcygnus%2Fll%2Fimage%2F2018%2F10%2FPhoto_1.5bd9c2527206f.png%3Fauto%3Dformat%26w%3D1000%26h%3D562%26fit%3Dcrop%26dpr%3D2&f=1&nofb=1&ipt=60b433798797c1a7951529b5fe2b2dbbb0238b236df05255b6a5c9144b725d5b&ipo=images"
                    alt="Green double couch with wooden legs"
                    />
                    <Card.Body gap="2">
                    <Card.Title>Auto Fob Cloning</Card.Title>
                    <Card.Description>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces.
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        $450
                    </Text>
                    </Card.Body>
                    <Card.Footer gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost">Add to cart</Button>
                    </Card.Footer>
                </Card.Root> 
            </GridItem>

        </Grid>
    )
  }

export default Cards;