import {
    Card,
    Box,
    Text,
    CardBody,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react"
export default function Istituzione() {
    return (
        <Card backgroundColor={"#d9d4d4"} alignItems={"center"}>
            <CardBody
                marginBottom='2em'>
                <Box>
                    <Box>
                        <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                            Informazioni istituzionali
                        </Text>
                    </Box>
                    <Box>
                        <Grid
                            h='200px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            marginTop={"3rem"}
                        >
                            <GridItem rowSpan={2} colSpan={1}>
                                <Image src='https://web.archive.org/web/20210506062209im_/http://www.museodelrisorgimento.mi.it/uploads/pics/Facciatarisorgimento.jpg' alt='' height={"100%"} borderRadius='15px' />
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Text textAlign='center' fontSize={"lg"}>
                                    Il Museo del Risorgimento ebbe origine nel 1884 dalla volontà dei milanesi di inviare all’esposizione Generale Italiana di Torino una raccolta di testimonianze relative all’epopea risorgimentale. Chiusa la mostra, i materiali trovarono una prima sistemazione nel Salone dei Giardini Pubblici (ex Convento delle Carcanine) per essere poi trasferiti nel 1896 al Castello Sforzesco. Oggi il Museo ha sede nel settecentesco Palazzo Moriggia, progettato nel 1755 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Fin dalla nascita il Museo si presentò come una istituzione in grado di affiancare ai compiti di tutela della memoria e di costruzione dell'identità nazionale che gli erano propri il ruolo di istituto impegnato nel campo della ricerca grazie all'organizzazione di una biblioteca e di un archivio, che sono oggi tra i più importanti in Italia per lo studio della storia nazionale recente. Questi compiti connotano ancora oggi la sua presenza nel panorama degli istituti culturali cittadini.
                                </Text>
                            </GridItem>

                        </Grid>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
}