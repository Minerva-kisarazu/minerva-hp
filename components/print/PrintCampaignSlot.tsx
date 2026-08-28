import { printCampaign } from '@/data/printMaterials';

/** 通常は非表示。printCampaign に文言を入れると帯として表示 */
export default function PrintCampaignSlot() {
  if (!printCampaign) {
    return <div className="print-campaign-slot print-campaign-slot--empty" aria-hidden="true" />;
  }

  return (
    <div className="print-campaign-slot">
      <p>{printCampaign}</p>
    </div>
  );
}
