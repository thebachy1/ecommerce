import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal flex flex-col justify-between w=[300px] h-[100px] p-[20px] bg-[#f3f3f3] border  border-solid border-[#dddddd] rounded-[3px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="bg-[#20ACE8] rounded-[2px] w-full h-[30px] border border-solid mt-[20px] border-[#0F64AA]">
        Proceder al pago
      </button>
    </div>
  );
}

export default Subtotal;
