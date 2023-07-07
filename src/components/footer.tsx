import {
    InputLeftAddon,
    Text,
    InputGroup,
    Input,
    Grid,
    GridItem
} from "@chakra-ui/react"
export default function Footer() {
    return (
        <footer>
                <Grid
                    h='10%'
                    width={"100%"}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={5}
                    backgroundColor={"#a63030"}
                    justifyContent={"center"}
                >
                    <GridItem colSpan={3} marginTop={"2rem"}>
                        <Text color={"white"} textAlign={"center"}>
                            Privacy & copyright |Museo del Risorgimento . via Borgonuovo 23 . 20121 Milano . 02 884 64177 / 64173
                        </Text>
                    </GridItem>
                    <GridItem colSpan={2} marginTop={"2rem"}>
                        <InputGroup size='sm'>
                            <InputLeftAddon children='@' />
                            <Input placeholder='e-mail' backgroundColor={"white"} maxWidth={"20rem"}/>
                        </InputGroup>
                    </GridItem>
                </Grid>
        </footer >
    );
}