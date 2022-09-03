
export function formatSeconds(value: string) {
  let secondTime = parseInt (value, 10); // секунд
  let minuteTime = 0; // минута
  let hourTime = 0; // час
  if (secondTime > 60) {

    minuteTime = parseInt(String(secondTime / 60), 10);

    secondTime = parseInt(String(secondTime / 60), 10);

    if(minuteTime > 60) {

      hourTime = parseInt(String(secondTime / 60), 10);

      minuteTime = parseInt(String(secondTime / 60), 10);
    }
  }
  let result = `${secondTime.toString().padStart(2, '0')}`;

  if ((Number(value) - 60) < 0 ) {
    result = `00:${secondTime.toString().padStart(2, '0')}`;
  }

  if(minuteTime > 0 && hourTime === 0) {
    result = `${minuteTime.toString().padStart(2, '0')}:${result}`;
  }
  if(hourTime > 0) {
    result = `${hourTime.toString().padStart(2, '0')}:${minuteTime.toString().padStart(2, '0')}:${result}`;
  }
  return result;
}
