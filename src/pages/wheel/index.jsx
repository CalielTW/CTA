import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Modal,
  Card,
  Typography,
  Button,
} from "@mui/material";
import { WheelComponent } from "../../components/spinWheel/spinWheel";
import Confetti from "react-confetti";
import useTwitch from "../../hooks/useTwitch";
import { grey, purple } from "@mui/material/colors";
import { WheelOptions } from "../../components/spinWheel/spinWheelOptions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const WheelView = () => {
  const { messagesWheel, clearMessagesWheel } = useTwitch();
  const [winner, setWinner] = useState(null);

  const weelColors = () => {
    let wheelColors = [];
    let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    messagesWheel.forEach((el) => {
      let color = colors.shift();
      wheelColors.push(color);
      colors.push(color);
    });

    if (wheelColors.length) return wheelColors;
    return [grey[300]];
  };

  const segColors = weelColors();

  const onFinished = async (winner) => {
    setWinner(winner);
  };

  const handleClose = () => setWinner(null);

  useEffect(() => {
    if (winner)
      setTimeout(() => {
        handleClose(null);
      }, 10000);
  }, [winner]);

  return (
    <Container sx={{ margin: "2rem", height: "80vh", minWidth: "95%" }}>
      {winner && <Confetti width={1600} height={1019} />}
      <Modal
        open={winner}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {winner}
          </Typography>
        </Grid>
      </Modal>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%", padding: 2 }}>
            <Button
              onClick={clearMessagesWheel}
              variant="contained"
              style={{ backgroundColor: purple[900] }}
            >
              Restart Wheel
            </Button>
            <WheelOptions />
          </Card>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <WheelComponent
              segments={messagesWheel.length ? messagesWheel : [""]}
              segColors={segColors}
              winningSegment={"8"}
              onFinished={(winner) => onFinished(winner)}
              primaryColor="gray"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
