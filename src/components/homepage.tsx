import {
    Card,
    Box,
    Text,
    CardBody,
    Image,
    Grid,
    GridItem
} from "@chakra-ui/react"
export default function Homepage() {
    return (
        <Card backgroundColor={"#d9d4d4"}>
            <CardBody
                marginBottom='2em'>
                <Box justifyContent={"center"} marginBottom='2em'>
                    <Image src='https://web.archive.org/web/20210513154151im_/http://www.museodelrisorgimento.mi.it/fileadmin/templates/tpl/images/board_risorgimento.jpg' alt='' width={"100%"} borderRadius='15px' />
                </Box>
                <Box>
                    <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                        Benvenuto
                    </Text>
                    <Text textAlign='center'>
                        Nato nel 1885, dal 1951 il museo ha sede nel settecentesco palazzo Moriggia, progettato nel 1775 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Già sede, in epoca napoleonica, del Ministero degli Esteri e, in seguito, del Ministero della Guerra, il palazzo, passato nel 1900 alla famiglia De Marchi, fu donato al Comune di Milano dalla moglie del celebre naturalista Marco De Marchi e in quell'occasione destinato a sede museale.
                        Attraverso un articolato insieme di materiali composti da stampe, dipinti, sculture, disegni, armi e cimeli, le collezioni illustrano il periodo della storia italiana compreso tra la prima campagna di Napoleone Bonaparte in Italia (1796) e l'annessione di Roma al Regno d'Italia (1870).
                        L'ultimo allestimento risale al 2011 in occasione delle celebrazioni del 150° anniversario dell'Unità d'Italia. Mantenendo intatta la sequenza cronologica, il percorso espositivo, suddiviso in 14 sale, evidenzia i nuclei salienti delle collezioni come, ad esempio, i cimeli dell'incoronazione di Napoleone in Italia (il manto verde e argento e le preziose insegne regali), lo stendardo della Legione Lombarda Cacciatori a cavallo, il primo Tricolore italiano.
                    </Text>
                </Box>
            </CardBody>
            <Grid
                h='10%'
                width={"100%"}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={6}
                justifyContent={"center"}
                margin={"5"}
            >
                <GridItem colSpan={3} marginTop={"2rem"} maxW={"70%"}>
                    <CardBody
                        marginBottom='2em'>
                        <Box>
                            <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                                Dove siamo
                            </Text>
                            <Text textAlign='center'>
                                Via Borgonuovo, 23 - 20121 Milano
                                MM2 Lanza - MM3 Montenapoleone
                                Tram 1 / Bus 61, 94
                            </Text>
                        </Box>
                    </CardBody>
                </GridItem>
                <GridItem colSpan={2} marginTop={"2rem"} maxW={"70%"}>
                    <CardBody
                        marginBottom='2em'>
                        <Box>
                            <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                                Info
                            </Text>
                            <Text textAlign='center'>
                                Dal 27 aprile 2021
                                RIAPERTURA MUSEO
                                Dal 27 aprile Palazzo Moriggia | Museo del Risorgimento riapre al pubblico dalle 10 alle 17.30... [continua]
                            </Text>
                        </Box>
                    </CardBody>
                </GridItem>
            </Grid>


        </Card>
    );
}