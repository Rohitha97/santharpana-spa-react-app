import { HeaderProps } from "../../DataModel/HeaderProps";

function PageHeader({ title, subtitle }: HeaderProps) {
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span>{subtitle}</span>
                <h1 className="text-capitalize text-lg">
                  {(title as string) || ""}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
