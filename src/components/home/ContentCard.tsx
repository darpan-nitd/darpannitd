"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { kalam, rozhaOne } from "../fonts/fonts";

const ContentCard = () => {
  return (
    <motion.div
      className="frame-container p-6 max-w-lg mx-auto bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <p
        className={clsx(
          `${rozhaOne.className} text-gray-100 text-3xl text-center pb-4`
        )}
      >
        हमारा उदेश्य
      </p>
      <motion.div
        className="content-area bg-white p-6 rounded-lg shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={clsx(`${kalam.className} text-gray-700 text-lg`)}>
          {`'दर्पण' क्लब आपका स्वागत करता है! यह क्लब उन छात्रों के लिए एक मंच है
          जो हिंदी भाषा और साहित्य के प्रति अपने प्रेम को बढ़ावा देना चाहते हैं।
          'दर्पण' का उद्देश्य हिंदी भाषा को महाविद्यालय के छात्रों के बीच
          लोकप्रिय बनाना और उसे प्रोत्साहित करना है। हमारे क्लब में हिंदी के
          महत्व को बढ़ावा देने के लिए विभिन्न गतिविधियाँ आयोजित की जाती हैं,
          जैसे कि कविता पाठ, निबंध लेखन, वाद-विवाद प्रतियोगिता, और अन्य रचनात्मक
          साहित्यिक कार्यक्रम। इसके साथ ही, 'गूँज' जैसी विशेष सांस्कृतिक और
          साहित्यिक प्रतियोगिताएँ भी आयोजित की जाती हैं, जिसमें छात्रों को अपनी
          प्रतिभा दिखाने का अवसर मिलता है। 'दर्पण' क्लब हिंदी भाषा की मिठास और
          उसकी समृद्ध विरासत को सहेजने और उसे आने वाली पीढ़ियों तक पहुंचाने का
          प्रयास करता है। अगर आप भी हिंदी भाषा और साहित्य में रुचि रखते हैं और
          अपनी रचनात्मकता को एक नए आयाम पर ले जाना चाहते हैं, तो 'दर्पण' क्लब से
          जुड़िए और इस सफर का हिस्सा बनिए। आइए, मिलकर हिंदी भाषा की महक को और
          अधिक फैलाएँ और 'दर्पण' के माध्यम से अपनी सांस्कृतिक धरोहर को संजोएँ।`}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContentCard;
