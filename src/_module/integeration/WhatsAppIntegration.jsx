"use client";
import { useState, useEffect, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CardWrapper from "./CardWrapper";
import { whatsAppQr } from "@/lib/actions/integeration";
import { QRCodeSVG } from 'qrcode.react';

const QR_EXPIRE_SECONDS = 59;

// With async/await
const generateQR = async (text) => {
  try {
    const qr_code = await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' })
    return qr_code
  } catch (err) {
    console.error(err)
  }
}

const WhatsAppIntegration = () => {
  const [timeLeft, setTimeLeft] = useState(QR_EXPIRE_SECONDS);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [qrcode, setQrcode] = useState("");

  // 1) Define a stable fetch function
  const fetchQr = useCallback(async () => {
    const res = await whatsAppQr();
    if (res.success) {
      // const qr = await generateQR(res.data.data.qrcode);
      setQrcode(res.data.data.qrcode);
      setTimeLeft(QR_EXPIRE_SECONDS); // reset countdown on new QR
    }
  }, []);



  // 2) Fetch on mount
  useEffect(() => {
    fetchQr();
  }, [fetchQr]);

  // 3) Countdown + auto-refresh when it hits zero
  useEffect(() => {
    if (timeLeft <= 0) {
      fetchQr();
      return;
    }
    const id = setTimeout(() => setTimeLeft(timeLeft - 1), 1_000);
    return () => clearTimeout(id);
  }, [timeLeft, fetchQr]);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <CardWrapper>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-10 lg:py-0 gap-8">
        {/* Left side instructions */}
        <div className="flex-1 flex flex-col justify-center items-start gap-10 font-inter">
          <div className="space-y-3">
            <h2 className="text-xl lg:text-2xl font-medium text-center md:text-left">
              Connect WhatsApp to Sapien7
            </h2>
            <p className="text-gray-300 text-sm font-light text-center md:text-left">
              Scan with your WhatsApp app to connect Sapien7
            </p>
          </div>
          <ol className="space-y-3 text-sm lg:text-base font-normal list-decimal list-inside">
            <li>Open WhatsApp on your mobile.</li>
            <li>Tap Settings &gt; Linked Devices.</li>
            <li>Tap Link a Device.</li>
            <li>Point your camera to scan the QR above.</li>
            <li>Wait for Sapien7 to confirm the connection.</li>
          </ol>
          <div className="text-lg font-urbanist pt-4">
            QR expires in{" "}
            <span className="text-primary">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Right side QR & keep-logged toggle */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 p-4 rounded-lg">
              {qrcode ? (
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                  <QRCodeSVG
                    value={qrcode}
                    size={256}
                  // optional props like fgColor, level, etc.
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  Loading…
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="keep-logged"
              checked={keepLoggedIn}
              onCheckedChange={(c) => setKeepLoggedIn(!!c)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label htmlFor="keep-logged" className="text-sm text-gray-300">
              Keep me logged in
            </label>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default WhatsAppIntegration;
