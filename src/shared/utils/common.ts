export function getExtension(url: string) : string {
    const match = url.match(/\.(\w+)(?:[\?#]|$)/);
    return match ? match[1] : "";
  }