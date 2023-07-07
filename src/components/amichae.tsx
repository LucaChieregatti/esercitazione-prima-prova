import {
    Card,
    Box,
    Text,
    CardBody,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react"
export default function Amichae() {
    return (
        <Card backgroundColor={"#d9d4d4"}>
            <CardBody
                marginBottom='2em'>
                <Box>
                    <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                        Amichae
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
                                <Image src='https://web.archive.org/web/20210423091251im_/http://www.museodelrisorgimento.mi.it/typo3temp/pics/e7b24d18da.jpg' alt='' height={"100%"} borderRadius='15px' />
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text textAlign='center'>
                                    L’Associazione Milano Cultura Heritage Arte ed Educazione nasce per il sostegno delle Civiche Raccolte Storiche ed è l’associazione degli Amici di Palazzo Morando e di Palazzo Moriggia.

                                    Si propone innanzitutto di far conoscere, anche a livello internazionale, il grande patrimonio artistico e culturale di Milano, in particolare promuovendo acquisizioni, restauri, donazioni e interventi specifici sulla base delle necessità dei due Musei.

                                    Altro obiettivo è quello di creare un gruppo di appassionati d’arte che, attorno a un calendario di appuntamenti e incontri, conferenze, proiezioni e mostre, seguano un vero percorso educativo capace di sancire la continuità tra passato e futuro. Un programma che permette ai membri dell’Associazione di instaurare un fervido colloquio e confronto con le istituzioni e i direttori dei musei, gli artisti e le loro performance, i critici e gli storici, i galleristi e i curatori, nazionali ed esteri.

                                    Le conferenze organizzate da Amichae sono aperte al pubblico con entrata libera fino a esaurimento posti disponibili.

                                    Iscrizione newsletter per ricevere gli inviti: martina.loi@comune.milano.it.
                                </Text>
                            </GridItem>

                        </Grid>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
}