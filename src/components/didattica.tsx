import {
    Card,
    Box,
    Text,
    CardBody,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react"
export default function Did() {
    return (
        <Card backgroundColor={"#d9d4d4"}>
            <CardBody
                marginBottom='2em'>
                <Box>
                    <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                        Attività didattiche
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
                                <Image src='https://web.archive.org/web/20210506072546im_/http://www.museodelrisorgimento.mi.it/uploads/pics/didattica.jpg' alt='' height={"100%"} borderRadius='15px' />
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text textAlign='center' fontSize={"lg"}>
                                    Al Museo del Risorgimento è attiva dal gennaio 2000 una Sezione Didattica le cui proposte mirano a trasformare la visita al Museo in un’esperienza emozionante, che fa nascere il desiderio di approfondire e ampliare le tematiche incontrate senza ridurla a una lezione di storia o trasformandola in una verifica d’apprendimento.

                                    La visita alle sale può essere condotta dal personale della Sezione o gestita dall’insegnante.
                                    La guida alle visite dei giovani è caratterizzata da una comunicazione non frontale che, con quesiti e curiosità, coinvolge anche gli studenti meno preparati; i contenuti si fondano sulla loro esperienza e rimandano ad argomenti di attualità; tiene conto dei tempi di attenzione; utilizza un linguaggio dalla struttura semplice, ma con un lessico scientificamente corretto.

                                    Prenotazioni e informazioni: tel. 02.884 62606 / 64175 / 64194

                                    fax 02.884.42165

                                    mail: ed.scuoledidatticaraccoltestoriche(at)comune.milano.it
                                </Text>
                            </GridItem>

                        </Grid>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
}