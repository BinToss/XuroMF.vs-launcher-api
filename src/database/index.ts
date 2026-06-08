import { DataSource } from "typeorm"
import path from "path"

export const ADS = new DataSource({
  type: "sqlite",
  database: path.resolve("/app/db/vslapi.sqlite"),
  entities: [path.join(__dirname ?? import.meta.dirname, "models", "*.model.{ts,js}")],
  synchronize: true
})

export const initializeDatabase = async () => {
  await ADS.initialize()
  console.log("🟢 Data Source initialized!")
}
