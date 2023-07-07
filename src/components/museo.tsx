import {
    Card,
    Box,
    Text,
    CardBody,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react"
export default function Museo() {
    return (
        <Card backgroundColor={"#d9d4d4"}>
            <CardBody
                marginBottom='2em'>
                <Box>
                    <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                        Il Museo
                    </Text>
                    <Box>
                        <Grid
                            h='200px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            marginTop={"3rem"}
                        >
                            <GridItem rowSpan={2} colSpan={1}>
                                <Image src='https://web.archive.org/web/20210423090517im_/http://www.museodelrisorgimento.mi.it/typo3temp/pics/5d4a423594.jpg' alt='' height={"100%"} borderRadius='15px' />
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text textAlign='center' fontSize={"lg"}>
                                    Il Museo del Risorgimento ha sede a Palazzo Moriggia, in via Borgonuovo, conosciuta anche come "contrada dei nobili" per la presenza di molte importanti dimore sei-settecentesche.
                                    Il Palazzo, progettato nel 1775 da Giuseppe Piermarini su incarico del marchese Giovanni Battista Moriggia, fu sede in epoca napoleonica del Ministero degli Esteri e in seguito del Ministero della Guerra.
                                    Divenne poi residenza della famiglia De Marchi, che successivamente lo donò al Comune di Milano per destinarlo a sede culturale e museale.
                                    A questo link puoi consultare il database in continuo aggiornamento della collezione del Museo del Risorgimento.
                                </Text>
                            </GridItem>

                        </Grid>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
}