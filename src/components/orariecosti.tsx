import {
    Card,
    Box,
    Text,
    CardBody
} from "@chakra-ui/react"
export default function orariecosti() {
    return (
        <Card backgroundColor={"#d9d4d4"}>
            <CardBody
                marginBottom='2em'>
                <Box>
                    <Text textAlign='center' color='#a63030' fontSize="4xl" fontWeight="bold">
                        Orari e Costi
                    </Text>
                    <Text textAlign='center'>
                        Il Museo è aperto dal martedì alla domenica con orario continuato dalle 10 alle 17.30 (ultimo ingresso ore 17.00).
                        <br></br>
                        L'accesso, gratuito e senza prenotazione, avverrà in via contingentata nella misura di massimo 5 persone per sala, previa misurazione della temperatura ed esclusivamente con la mascherina.
                        <br></br>
                        <br></br>
                        Come raggiungerci:
                        <br></br>
                        Via Borgonuovo, 23 - 20121 Milano
                        <br></br>
                        <br></br>
                        Mezzi di trasporto:
                        <br></br>
                        M2 Lanza, M3 Montenapoleone
                        <br></br>
                        Tram 1 Bus 94, 61, 43
                        <br></br>
                        <br></br>
                        Contatti:
                        <br></br>
                        Tel. 02 884 64173
                        <br></br>
                        Fax 02 884 64181
                        <br></br>
                        <br></br>
                        email: c.museorisorgimento@comune.milano.it
                        <br></br>
                        <br></br>
                        Accessibilità alla strutturaù
                        <br></br>
                        Il museo dispone di una rampa di accesso per i disabili di servizi igienici attrezzati.
                        <br></br>
                        <br></br>
                        Visite guidate
                        <br></br>
                        Il Museo organizza visite guidate su richiesta.
                        <br></br>
                        <br></br>
                        Info
                        <br></br>
                        Visite al Museo del Risorgimento:
                        <br></br>
                        <br></br>
                        tel. 02 884 62606 / 64175 / 64194 Fax 02 884 42165
                        <br></br>
                        ed.scuoledidatticaraccoltestoriche@comune.milano.it
                    </Text>
                </Box>
            </CardBody>
        </Card>
    );
}