import can
from typing import Literal

CAN_CHANNEL = "can0"
CAN_BITRATE = 250000

def prepare_can_message(action: Literal["on", "off"]) -> can.Message:
    """
    Prepare a CAN message based on the action.
    """
    arbitration_id = 0x123  # Example arbitration ID
    data = [0x01 if action == "on" else 0x00]
    return can.Message(arbitration_id=arbitration_id, data=data, is_extended_id=False)

async def send_can_message(message: can.Message):
    with can.Bus(channel=CAN_CHANNEL, interface="socketcan", bitrate=CAN_BITRATE) as bus:
        try:
            bus.send(message)
            print(f"Message sent: {message}")
        except can.CanError:
            print("Message NOT sent")