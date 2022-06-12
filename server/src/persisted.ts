interface Turning {
  id: string;
  name: string;
}

interface Thread {
  id: string;
  turningId: string;
  openNote: number;
}

export const turnings = new Map<string, Turning>();
turnings
  .set("1", { id: "1", name: "Regular" })
  .set("2", { id: "2", name: "DADGAD" })
  .set("3", { id: "3", name: "DAEAC#E" })
  .set("4", { id: "4", name: "OpenG" });
