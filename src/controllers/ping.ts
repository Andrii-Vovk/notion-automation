interface PingResponse {
  message: string;
}

export default class PingController {
  public async getMessage(): Promise<PingResponse> {
    return {
      message: `Pinged at ${new Date()}`,
    };
  }
}
