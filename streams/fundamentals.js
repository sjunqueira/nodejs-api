import { Readable, Transform, Writable, Duplex } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class InverseStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplybyTenStream extends Writable {
  _write(chunk, encoding, callback) {
    {
      console.log(Number(chunk.toString()) * 2);
      callback();
    }
  }
}

// new DuplexStream()
//   .pipe(new DuplexStream());

new OneToHundredStream()
  .pipe(new InverseStream())
  .pipe(new MultiplybyTenStream());
