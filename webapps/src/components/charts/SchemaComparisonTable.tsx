import ChartCard from "@/components/charts/ChartCard";
import React from "react";

interface Schema {
  name: string;
  values: string[];
}

interface SchemaComparisonTableProps {
  schemas: Schema[];
  criteria: string[];
  title?: string;
  description?: string;
}

const SchemaComparisonTable: React.FC<SchemaComparisonTableProps> = ({
  schemas,
  criteria,
  title = "Schema Comparison",
  description,
}) => {
  return (
    <ChartCard title={title} description={description}>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-zinc-200 dark:border-zinc-700 rounded-lg">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="p-3 text-left font-semibold">Criteria</th>
              {schemas.map((schema) => (
                <th key={schema.name} className="p-3 text-left font-semibold">
                  {schema.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, idx) => (
              <tr
                key={criterion}
                className={
                  idx % 2 === 0
                    ? "bg-white dark:bg-zinc-900"
                    : "bg-zinc-50 dark:bg-zinc-800"
                }
              >
                <td className="p-3 font-medium">{criterion}</td>
                {schemas.map((schema) => (
                  <td key={schema.name + criterion} className="p-3">
                    {schema.values[idx]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  );
};

export default SchemaComparisonTable;
